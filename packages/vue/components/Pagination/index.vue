<script>
  import Guide from './Guide';
  import s from '../../../common/Pagination/index.scss';

  export default {
    Guide,
    name: 'l-pagination',
    props: {
      count: { type: Number, default: 5 },
      page: { type: Number, default: 1 }
    },
    computed: {
      numbersPage() {
        const { page, count } = this;
        const countShow = (count < 5) ? count : 5;
        const startIndex = page - 2;
        const arr = [];

        for (let index = startIndex; arr.length < countShow; index++) {
          if (index > count) {
            arr.unshift(arr[0] - 1);
            continue;
          }
          if (index > 0) {
            arr.push(index);
          }
        }

        return arr;
      }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div :class="s.pagination">
    <div :class="[s.paginationFastLink, { [s.paginationHide]: page === 1 }]">
      <div
        :class="s.arrow"
        v-if="page !== 1"
        v-on:click="page = page - 1"
      >{{'<'}}</div>
    </div>

    <div :class="s.list">
      <template v-if="numbersPage[0] !== 1">
        <div :class="s.item" v-on:click="page = 1">1</div>
        <div :class="[s.item, s.itemPure]">..</div>
      </template>

      <div
        :class="[s.item, { [s.active]: page === number }]"
        v-for="number, index in numbersPage"
        v-on:click="page = number"
      >{{number}}</div>

      <template v-if="numbersPage[numbersPage.length - 1] !== count">
        <div :class="[s.item, s.itemPure]">..</div>
        <div :class="s.item" v-on:click="page = count">{{count}}</div>
      </template>
    </div>

    <div :class="[s.paginationFastLink, { [s.paginationHide]: page === count }]">
      <div
        :class="s.arrow"
        v-if="page !== count"
        v-on:click="page = page + 1"
      >{{'>'}}</div>
    </div>
  </div>
</template>
