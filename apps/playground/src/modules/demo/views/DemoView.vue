<script setup lang="ts">
import { ref } from 'vue';
import { AppButton, PricingBlock } from '@us-telecoms/ui-kit';
import { isValidPhone } from '@us-telecoms/shared';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';

const phone = ref('');
const inputValue = ref('');
const validationResult = ref<string | null>(null);

function validatePhone() {
  validationResult.value = isValidPhone(phone.value)
    ? 'Valid phone number'
    : 'Invalid phone number';
}
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-6">
    <h2 class="text-2xl font-bold text-gray-900">Playground Demo</h2>
    <p class="text-gray-600">
      This is the Playground carrier app running with PrimeVue + Tailwind CSS v4.
    </p>

    <div class="rounded-lg border bg-white p-6 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold">Phone Validation Demo</h3>
      <div class="flex items-end gap-4">
        <div class="flex-1">
          <label class="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            v-model="phone"
            type="text"
            placeholder="Enter US phone number"
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <AppButton label="Validate" @click="validatePhone" />
      </div>
      <p v-if="validationResult" class="mt-3 text-sm font-medium" :class="validationResult.includes('Valid') && !validationResult.includes('Invalid') ? 'text-green-600' : 'text-red-600'">
        {{ validationResult }}
      </p>
    </div>

    <div class="rounded-lg border bg-white p-6 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold">PrimeVue Input Components</h3>
      <div class="flex flex-col gap-">
        <div class="flex flex-col gap-2">
          <label class="mb-1 block text-sm font-medium text-gray-700">InputText</label>
          <div class="flex gap-2">
            <InputText v-model="inputValue" placeholder="Type something..." class="w-full" />
            <Button label="Submit" />
          </div>
        </div>
        <p class="text-sm text-gray-500">Value: {{ inputValue }}</p>
      </div>

      <div class="mt-6 flex justify-center">
      <Card style="width: 25rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
      </div>
    </div>

    <div class="rounded-lg border bg-white p-6 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold">PrimeVue Blocks Code</h3>
       <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
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
                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
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
                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
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
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-(--p-primary-500)" />
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
                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
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
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-(--p-primary-500)" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Duis ultricies lacus sed </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-(--p-primary-500)" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Imperdiet proin </span>
                    </li>
                </ul>
                <Button label="Buy Now" rounded class="w-full" />
            </div>
        </div>
    </div>
    </div>

    <div class="rounded-lg border bg-white p-6 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold">Shared Components</h3>
      <div class="flex flex-wrap gap-3">
        <AppButton label="Primary" />
        <AppButton label="Secondary" severity="secondary" />
        <AppButton label="Success" severity="success" />
        <AppButton label="Danger" severity="danger" />
        <AppButton label="Outlined" outlined />
      </div>
    </div>
    <section class="rounded-lg border bg-white p-6 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold">Shared Prime Blocks</h3>
      <PricingBlock />
    </section>

  </div>
</template>
