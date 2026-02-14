<template>
  <div class="home-page">
    <div v-if="departureList.length" class="table__wrapper">
      <InputSearch @onSearch="onSearch"/>

      <AddNewRow
        v-if="isAdmin"
        @onAddRow="onAddRow"
      />

      <HeadTable />
      <div>
       <BodyTable
          :list="flightsList"
          @onUpdateDb="onUpdateDb"
          @onDelRow="onDelRow"
       />
      </div>
    </div>
    <template v-if="!flightsList.length && searchStr">
      <h2 class="h2">Ничего не найдено</h2>
    </template>

    <template v-if="!departureList.length">
      <h2 class="h2">Загрузка...</h2>
    </template>
  </div>
</template>

<script>
import { db } from '@/firebase';
import {
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
} from 'firebase/firestore';
import HeadTable from '@/components/table/HeadTable';
import BodyTable from '@/components/table/BodyTable';
import InputSearch from '@/components/inputSearch/InputSearch';
import { searchHelper } from '@/helpers/searchHelper';
import AddNewRow from '@/components/addNewRow/AddNewRow';

export default {
  name: 'HomePage',
  components: {
    AddNewRow, InputSearch, BodyTable, HeadTable,
  },

  data() {
    return {
      departureList: [],
      searchStr: '',
      unsubscribeSnapshot: null,
    };
  },
  watch: {
    currentPage() {
      this.setFirebase();
    },
  },

  mounted() {
    this.setFirebase();
  },

  beforeDestroy() {
    if (this.unsubscribeSnapshot) {
      this.unsubscribeSnapshot();
      this.unsubscribeSnapshot = null;
    }
  },

  computed: {
    flightsList() {
      return searchHelper(this.departureList, this.searchStr);
    },

    currentPage() {
      return this.$store.getters.currentPage;
    },

    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },

  methods: {
    setFirebase() {
      if (this.unsubscribeSnapshot) {
        this.unsubscribeSnapshot();
      }

      this.unsubscribeSnapshot = onSnapshot(collection(db, this.currentPage), (querySnapshot) => {
        const arrList = [];
        querySnapshot.forEach((t) => {
          arrList.push({
            id: t.id,
            ...t.data(),
          });
        });

        this.departureList = arrList;
      });
    },

    onSearch(str) {
      this.searchStr = str;
    },

    onUpdateDb(newValue) {
      const { id, ...payload } = newValue;
      updateDoc(doc(db, this.currentPage, id), {
        ...payload,
      });
    },

    onAddRow(newRow) {
      addDoc(collection(db, this.currentPage), newRow);
    },

    onDelRow(props) {
      deleteDoc(doc(db, this.currentPage, props.id));
    },
  },
};
</script>
