<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x hidden md:flex xl:w-[180px] block">
        <img
          alt="Enigma Tailwind HTML Admin Template"
          class="logo__image w-6"
          src="@/assets/images/logo.svg"
        />
        <span class="logo__text text-white text-lg ml-3"> Enigma </span>
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x mr-auto hidden sm:flex">
        <ol class="breadcrumb">
          <li
            v-for="(item, index) in routeMatched"
            :key="index"
            class="breadcrumb-item"
            :class="{ active: index === routeMatched.length - 1 }"
          >
            <template v-if="index === routeMatched.length - 1">
              {{ item.meta.title }}
            </template>
            <template v-else>
              <router-link :to="item.path">{{ item.meta.title }}</router-link>
            </template>
          </li>
        </ol>
      </nav>
      <!-- END: Breadcrumb -->

      <!-- BEGIN: Account Menu -->
      <Dropdown class="intro-x w-8 h-8">
        <DropdownToggle
          tag="div"
          role="button"
          class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
        >
          <img alt="Buusama" src="@/assets/images/profile-5.jpg" />
        </DropdownToggle>
        <DropdownMenu class="w-56">
          <DropdownContent class="bg-primary text-white">
            <DropdownHeader tag="div" class="!font-normal">
              <div class="font-medium">{{ currentUser.name }}</div>
              <div class="text-xs text-white/70 dark:text-slate-500 mt-2">
                {{ currentUser.role === 1 ? 'Admin' : 'Member' }}:
                {{ currentUser.email }}
              </div>
            </DropdownHeader>
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem
              class="dropdown-item hover:bg-white/5"
              @click="actionLogout"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2" />
              Logout
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth.store';
  export default {
    name: 'TopBar',
    setup() {
      const searchDropdown = ref(false);
      const authStore = useAuthStore();
      const router = useRouter();

      const routeMatched = computed(() => {
        return router.currentRoute.value.matched.filter(
          (item) => item.meta && item.meta.title,
        );
      });

      const showSearchDropdown = () => {
        searchDropdown.value = true;
      };

      const hideSearchDropdown = () => {
        searchDropdown.value = false;
      };

      async function actionLogout() {
        authStore.logout();
      }
      const currentUser = computed(() =>
        JSON.parse(authStore.currentUser ?? ''),
      );
      return {
        searchDropdown,
        showSearchDropdown,
        hideSearchDropdown,
        actionLogout,
        currentUser,
        routeMatched,
      };
    },
  };
</script>
