<template>
  <div
    class="border-neutral-300 flex justify-between items-center py-1 text-sm"
  >
    <div class="flex text-center" v-if="!searchQuery.length">
      <div
        class="mx-1.5"
        :aria-label="t('New Folder')"
        data-microtip-position="bottom-right"
        role="tooltip"
        @click="
          emitter.emit('vf-modal-show', {
            type: 'new-folder',
            items: selectedItems,
          })
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </div>

<<<<<<< HEAD
      <!-- <div class="mx-1.5"
=======
        <!-- <div class="mx-1.5"
>>>>>>> master
             :aria-label="t('New File')" data-microtip-position="bottom" role="tooltip"
             @click="emitter.emit('vf-modal-show', {type:'new-file', items: selectedItems})">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" fill="none" viewBox="0 0 24 24" stroke="none" stroke-width="1.5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div> -->

      <div
        class="mx-1.5"
        :aria-label="t('Rename')"
        data-microtip-position="bottom"
        role="tooltip"
        @click="
          selectedItems.length != 1 ||
            emitter.emit('vf-modal-show', {
              type: 'rename',
              items: selectedItems,
            })
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="
            selectedItems.length == 1
              ? 'cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300'
              : 'stroke-gray-200  dark:stroke-gray-700'
          "
          class="h-6 w-6 md:h-8 md:w-8 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>

      <div
        class="mx-1.5"
        :aria-label="t('Delete')"
        data-microtip-position="bottom"
        role="tooltip"
        @click="
          !selectedItems.length ||
            emitter.emit('vf-modal-show', {
              type: 'delete',
              items: selectedItems,
            })
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="
            selectedItems.length
              ? 'cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300'
              : 'stroke-gray-200  dark:stroke-gray-700'
          "
          class="h-6 w-6 md:h-8 md:w-8 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>

      <div
        class="mx-1.5"
        :aria-label="t('Upload')"
        data-microtip-position="bottom"
        role="tooltip"
        @click="
          emitter.emit('vf-modal-show', {
            type: 'upload',
            items: selectedItems,
          })
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </div>

<<<<<<< HEAD
      <!-- <div class="mx-1.5" v-if="selectedItems.length == 1 && selectedItems[0].mime_type == 'application/zip'"
=======
        <!-- <div class="mx-1.5" v-if="selectedItems.length == 1 && selectedItems[0].mime_type == 'application/zip'"
>>>>>>> master
             :aria-label="t('Unrchive')" data-microtip-position="bottom" role="tooltip"
              @click="(!selectedItems.length) || emitter.emit('vf-modal-show', {type:'unarchive', items: selectedItems})">
          <svg xmlns="http://www.w3.org/2000/svg"
               :class="(selectedItems.length) ? 'cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300' : 'stroke-gray-200  dark:stroke-gray-700'"
               class="h-6 w-6 md:h-8 md:w-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="none" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <div class="mx-1.5" v-else
             :aria-label="t('Archive')" data-microtip-position="bottom" role="tooltip"
              @click="(!selectedItems.length) || emitter.emit('vf-modal-show', {type:'archive', items: selectedItems})">
          <svg xmlns="http://www.w3.org/2000/svg"
               :class="(selectedItems.length) ? 'cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300' : 'stroke-gray-200  dark:stroke-gray-700'"
               class="h-6 w-6 md:h-8 md:w-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="none" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div> -->
<<<<<<< HEAD
=======

>>>>>>> master
    </div>

    <div class="flex text-center" v-else>
      <div class="pl-2">
        {{ t("Search results for") }}
        <span class="dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded">{{
          searchQuery
        }}</span>
      </div>
      <svg
        class="animate-spin p-0.5 h-5 w-5 text-white ml-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        v-if="isLoading()"
      >
        <circle
          class="opacity-25 stroke-blue-900 dark:stroke-blue-100"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>

    <div class="flex text-center items-center justify-end">
      <div
        class="mx-1.5"
        :aria-label="t('Скрытые файлы')"
        data-microtip-position="bottom"
        role="tooltip"
      >
        <svg
          v-if="showHidden"
          @click="emitter.emit('vf-show-hidden-toggle')"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 83.78"
          stroke-linecap="round"
          stroke-linejoin="round"
          xml:space="preserve"
          stroke-width="1.5"
          class="h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer fill-gray-500 hover:fill-cyan-700 dark:fill-gray-400 dark:hover:fill-gray-300"
        >
          <path d="M95.73,10.81c10.53,7.09,19.6,17.37,26.48,29.86l0.67,1.22l-0.67,1.21c-6.88,12.49-15.96,22.77-26.48,29.86 C85.46,79.88,73.8,83.78,61.44,83.78c-12.36,0-24.02-3.9-34.28-10.81C16.62,65.87,7.55,55.59,0.67,43.1L0,41.89l0.67-1.22 c6.88-12.49,15.95-22.77,26.48-29.86C37.42,3.9,49.08,0,61.44,0C73.8,0,85.45,3.9,95.73,10.81L95.73,10.81z M60.79,22.17l4.08,0.39 c-1.45,2.18-2.31,4.82-2.31,7.67c0,7.48,5.86,13.54,13.1,13.54c2.32,0,4.5-0.62,6.39-1.72c0.03,0.47,0.05,0.94,0.05,1.42 c0,11.77-9.54,21.31-21.31,21.31c-11.77,0-21.31-9.54-21.31-21.31C39.48,31.71,49.02,22.17,60.79,22.17L60.79,22.17L60.79,22.17z M109,41.89c-5.5-9.66-12.61-17.6-20.79-23.11c-8.05-5.42-17.15-8.48-26.77-8.48c-9.61,0-18.71,3.06-26.76,8.48 c-8.18,5.51-15.29,13.45-20.8,23.11c5.5,9.66,12.62,17.6,20.8,23.1c8.05,5.42,17.15,8.48,26.76,8.48c9.62,0,18.71-3.06,26.77-8.48 C96.39,59.49,103.5,51.55,109,41.89L109,41.89z"/>
        </svg>
        <svg
          v-else
          @click="emitter.emit('vf-show-hidden-toggle')"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 83.78"
          stroke-linecap="round"
          stroke-linejoin="round"
          xml:space="preserve"
          stroke-width="1.5"
          class="h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer fill-gray-500 hover:fill-cyan-700 dark:fill-gray-400 dark:hover:fill-gray-300"
        >
          <path d="M0.955,37.326c2.922-3.528,5.981-6.739,9.151-9.625C24.441,14.654,41.462,7.684,59.01,7.334 c6.561-0.131,13.185,0.665,19.757,2.416l-5.904,5.904c-4.581-0.916-9.168-1.324-13.714-1.233 c-15.811,0.316-31.215,6.657-44.262,18.533l0,0c-2.324,2.115-4.562,4.39-6.702,6.82c4.071,4.721,8.6,8.801,13.452,12.227 c2.988,2.111,6.097,3.973,9.296,5.586l-5.262,5.262c-2.782-1.504-5.494-3.184-8.12-5.039c-6.143-4.338-11.813-9.629-16.78-15.85 C-0.338,40.563-0.228,38.59,0.955,37.326L0.955,37.326L0.955,37.326z M96.03,0l5.893,5.893L28.119,79.699l-5.894-5.895L96.03,0 L96.03,0z M97.72,17.609c4.423,2.527,8.767,5.528,12.994,9.014c3.877,3.196,7.635,6.773,11.24,10.735 c1.163,1.277,1.22,3.171,0.226,4.507c-4.131,5.834-8.876,10.816-14.069,14.963C95.119,67.199,79.338,72.305,63.352,72.377 c-6.114,0.027-9.798-3.141-15.825-4.576l3.545-3.543c4.065,0.705,8.167,1.049,12.252,1.031c14.421-0.064,28.653-4.668,40.366-14.02 c3.998-3.191,7.706-6.939,11.028-11.254c-2.787-2.905-5.627-5.543-8.508-7.918c-4.455-3.673-9.042-6.759-13.707-9.273L97.72,17.609 L97.72,17.609z M61.44,18.143c2.664,0,5.216,0.481,7.576,1.359l-5.689,5.689c-0.619-0.079-1.248-0.119-1.886-0.119 c-4.081,0-7.775,1.654-10.449,4.328c-2.674,2.674-4.328,6.369-4.328,10.45c0,0.639,0.04,1.268,0.119,1.885l-5.689,5.691 c-0.879-2.359-1.359-4.912-1.359-7.576c0-5.995,2.43-11.42,6.358-15.349C50.02,20.572,55.446,18.143,61.44,18.143L61.44,18.143z M82.113,33.216c0.67,2.09,1.032,4.32,1.032,6.634c0,5.994-2.43,11.42-6.357,15.348c-3.929,3.928-9.355,6.357-15.348,6.357 c-2.313,0-4.542-0.361-6.633-1.033l5.914-5.914c0.238,0.012,0.478,0.018,0.719,0.018c4.081,0,7.775-1.652,10.449-4.326 s4.328-6.369,4.328-10.449c0-0.241-0.006-0.48-0.018-0.72L82.113,33.216L82.113,33.216z"/>
        </svg>
      </div>
      <div
        class="mx-1.5"
        :aria-label="t('Dark Mode')"
        data-microtip-position="bottom"
        role="tooltip"
      >
        <svg
          @click="emitter.emit('vf-darkMode-toggle')"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </div>

      <div
        class="mx-1.5"
        :aria-label="t('Toggle Full Screen')"
        data-microtip-position="bottom-left"
        role="tooltip"
        @click="setFullScreen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
          stroke-width="1.5"
        >
          <path
            v-if="fullScreen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      </div>

      <div
        class="mx-1.5"
        :aria-label="t('Change View')"
        data-microtip-position="bottom-left"
        role="tooltip"
        @click="
          searchQuery.length ||
            emitter.emit('vf-view-toggle', view == 'list' ? 'grid' : 'list')
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="
            !searchQuery.length
              ? 'cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300'
              : 'stroke-gray-200  dark:stroke-gray-700'
          "
          class="h-6 w-6 md:h-8 md:w-8 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
          stroke-width="1.5"
        >
          <path
            v-if="view == 'grid'"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
          <path
            v-if="view == 'list'"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VFToolbar",
};
</script>

<script setup>
import { inject, ref } from "vue";

const emitter = inject("emitter");

const { getStore, setStore } = inject("storage");

const { t } = inject("i18n");

const view = ref(getStore("viewport", "grid"));

const selectedItems = ref([]);

const fullScreen = ref(getStore("full-screen", false));

const showHidden = ref(false);

emitter.on('vf-show-hidden-toggle', () => {
  showHidden.value = !showHidden.value;
});

const props = defineProps({
  data: Object,
});

const searchQuery = ref("");

emitter.on("vf-search-query", ({ newQuery }) => {
  searchQuery.value = newQuery;
});

const loadingState = inject("loadingState");
const isLoading = () => loadingState.value;

const setFullScreen = () => {
  fullScreen.value = !fullScreen.value;
  emitter.emit("vf-fullscreen-toggle");
};

emitter.on("vf-nodes-selected", (items) => {
  selectedItems.value = items;
});

emitter.on("vf-view-toggle", (newView) => {
  setStore("viewport", newView);
  view.value = newView;
});
</script>
