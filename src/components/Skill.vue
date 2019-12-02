<template>
  <div class="skill">
    <h1 class="skill-title">
      {{ name }}
    </h1>

    <p class="skill-description">
      {{ description }}
    </p>

    <div class="skill-evaluations">
      <div class="evaluation" v-for="(evaluation, index) in evaluations" :key="index">
        <h2 class="evaluation-title">
          {{ evaluation.name }}
        </h2>
        <b-progress type="is-info" :value="evaluation.progress"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    evaluations: Array
  }
}
</script>

<style lang="scss" scoped>
  .skill {
    padding: 1.7rem;
    /* background-color: #f9f9f9; */
    border: 1px solid #eee;
    border-radius: 8px;

    .skill-title {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .skill-description {
      font-size: 0.8rem;
      margin-top: 0.6rem;
    }

    .skill-evaluations {
      margin-top: 0.6rem;

      .evaluation {
        margin-top: 0.5rem;

        .evaluation-title {
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
    }
  }
</style>
