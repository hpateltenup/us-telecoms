<template>
  <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-2 lg:px-2">
    <div class="flex flex-col gap-4 items-center justify-center mb-12">
      <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">Pricing Plans</div>
      <div class="text-surface-500 dark:text-surface-400 text-lg text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
    </div>

    <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
      <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
        <div class="flex flex-col gap-2">
          <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Basic</h4>
          <p class="text-surface-500 dark:text-surface-400 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>

        <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
        <div class="flex items-center gap-2">
          <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">$9</span>
          <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">per month</span>
        </div>
        <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
        <ul class="list-none flex flex-col gap-4 flex-1">
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-(--p-primary-500)" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Arcu vitae elementum </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-(--p-primary-500)" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Dui faucibus in ornare </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-(--p-primary-500)" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Morbi tincidunt augue </span>
          </li>
        </ul>
        <Button label="Buy Now" rounded class="w-full" />
      </div>
      <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
        <div class="flex flex-col gap-2">
          <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Premium</h4>
          <p class="text-surface-500 dark:text-surface-400 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>

        <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
        <div class="flex items-center gap-2">
          <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">$29</span>
          <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">per month</span>
        </div>
        <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
        <ul class="list-none flex flex-col gap-4 flex-1">
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Arcu vitae elementum </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Dui faucibus in ornare </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Morbi tincidunt augue </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Duis ultricies lacus sed </span>
          </li>
        </ul>
        <Button label="Buy Now" rounded class="w-full" />
      </div>
      <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
        <div class="flex flex-col gap-2">
          <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Enterprise</h4>
          <p class="text-surface-500 dark:text-surface-400 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>

        <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
        <div class="flex items-center gap-2">
          <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">$49</span>
          <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">per month</span>
        </div>
        <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
        <ul class="list-none flex flex-col gap-4 flex-1">
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Arcu vitae elementum </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Dui faucibus in ornare </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Morbi tincidunt augue </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Duis ultricies lacus sed </span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-check-circle text-lg! text-green-500" />
            <span class="text-surface-800 dark:text-surface-100 leading-tight"> Imperdiet proin </span>
          </li>
        </ul>
        <Button label="Buy Now" rounded class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
</script>
