<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <nav aria-label="breadcrumb" class="-intro-x mr-auto hidden sm:flex">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Application</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
    <!-- END: Breadcrumb -->

    <!-- BEGIN: Account Menu -->
    <Dropdown class="intro-x w-8 h-8">
      <DropdownToggle tag="div" role="button"
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
        <img alt="Tinker Tailwind HTML Admin Template" src="@/assets/images/profile-5.jpg" />
      </DropdownToggle>
      <DropdownMenu class="w-56">
        <DropdownContent class="bg-primary text-white">
          <DropdownHeader tag="div" class="!font-normal">
            <div class="font-medium">John</div>
            <div class="text-xs text-white/70 dark:text-slate-500 mt-2">
              A man with big love
            </div>
          </DropdownHeader>
          <DropdownDivider class="border-white/[0.08]" />
          <DropdownItem @click="actionLogout" class="dropdown-item hover:bg-white/5">
            <ToggleRightIcon class="w-4 h-4 mr-2" />
            Logout
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

export default {
  name: "TopBar",
  setup() {
    const searchDropdown = ref(false);
    const authStore = useAuthStore();
    const router = useRouter();

    const showSearchDropdown = () => {
      searchDropdown.value = true;
    };

    const hideSearchDropdown = () => {
      searchDropdown.value = false;
    };


    async function actionLogout() {
      authStore.logout();
    }

    return {
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown,
      actionLogout,
    };
  },
};
</script>
