<script setup lang="ts">
  import { paginationStyles } from "@bouquet-ui/design";
  import { Pagination } from "../../../../src";

  const styles = paginationStyles();
</script>

<template>
  <Pagination.Root :class="styles.root()" :count="100" :page-size="10" :sibling-count="2">
    <Pagination.PrevTrigger :class="styles.root()">
      Previous
      <span class="visually-hidden">Page</span>
    </Pagination.PrevTrigger>
    <Pagination.Context v-slot="pagination">
      <template v-for="(page, index) in pagination.pages">
        <Pagination.Item :class="styles.root()" v-if="page.type === 'page'" :key="index" :value="page.value" :type="page.type">
          {{ page.value }}
        </Pagination.Item>
        <Pagination.Ellipsis :class="styles.root()" v-else :key="'e' + index" :index="index">&#8230;</Pagination.Ellipsis>
      </template>
    </Pagination.Context>
    <Pagination.NextTrigger :class="styles.root()">
      Next
      <span class="visually-hidden">Page</span>
    </Pagination.NextTrigger>
  </Pagination.Root>
</template>
