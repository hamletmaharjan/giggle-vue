<template>
  <div class="observer d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Observer',
    props: ['options'],
    data: () => ({
        observer: null,
    }),
    mounted() {
        const options = this.options || {};
        this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            this.$emit("intersect");
            console.log('intersect');
        }
        }, options);

        this.observer.observe(this.$el);
    },
    destroyed() {
        this.observer.disconnect();
    },
};
</script>

<style scoped>
.observer {
    padding: 50px;
    margin: 20px;
}
</style>