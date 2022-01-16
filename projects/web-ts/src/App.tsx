import test from './components/a';
import { ElDatePicker,ElButton } from 'element-plus'
import { useRouter } from 'vue-router';

export default {
  components: {
    test,
    ElButton,
    ElDatePicker
  },
  setup() {
    const router = useRouter()
    return () => (
      <div class="w-full text-center flex justify-center flex-wrap">
        <test msg="Hello Vue 3 + TypeScript + Vite" />
        <div class="w-full">
          <el-button onClick={() => router.push('/')}>页面主页</el-button>
          <el-button onClick={() => router.push('/page2')}>页面page2</el-button>
        </div>
        <router-view></router-view>
      </div>
    );
  },
}
