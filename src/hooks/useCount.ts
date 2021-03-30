import { ref } from '@vue/composition-api'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useCount() {
    const count = ref(0)
    const inc = () => count.value -= 1;
    const dec = () => count.value += 1;
    return {
        count,
        inc,
        dec
    }
}
export default useCount