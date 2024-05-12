<script>
import { useRouter } from 'vue-router';
export default {
  mounted() {
    this.load(); 
  },
  methods: {
    load() {
      const router = useRouter();
      const newURL = '/game';
      router.replace(newURL);
    }
  }
}
</script>