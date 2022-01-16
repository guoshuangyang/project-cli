import { defineComponent, ref } from "vue";
import back from "../assets/640.webp";
export default defineComponent({
  props: ["msg"],
  setup(props) {
    const a = ref(123);
    return () => (
      <div class="text-red-400">
        {props.msg}---{a.value}
        <img src={back} />
      </div>
    );
  },
});
