import { Store } from 'vuex'
import type { IStore } from '../src/store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IStore>;
  }
}

declare module '*.vue' {
  import {defineComponent} from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
