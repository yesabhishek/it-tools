<template>
  <n-space vertical>
    <n-card v-for="({ codes }, i) of codesByCategories" :key="i">
      <div v-for="({ code, name, description, type }, j) of codes" :key="j" class="code-section">
        <div class="code-section-head">
          <span class="code-section-head-code">{{ code }}</span>
          <span class="code-section-head-name">{{ name }}</span>
          <span class="code-section-head-tags">
            <n-tag round :bordered="false" size="small" style="opacity: 0.7">{{ type }}</n-tag>
          </span>
        </div>
        <div class="code-section-description">{{ description }}</div>
      </div>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
const codesByCategories: {
  category: string;
  codes: {
    code: number;
    name: string;
    description: string;
    type: 'HTTP' | 'WebDav';
  }[];
}[] = [
  {
    category: '1xx informational response',
    codes: [
      {
        code: 100,
        name: 'Continue',
        description: 'Waiting for the client to emit the body of the request.',
        type: 'HTTP',
      },
      {
        code: 101,
        name: 'Switching Protocols',
        description: 'The server has agreed to change protocol.',
        type: 'HTTP',
      },
      {
        code: 102,
        name: 'Processing',
        description: 'The server is processing the request, but no response is available yet.',
        type: 'WebDav',
      },
      {
        code: 103,
        name: 'Early Hints',
        description: 'The server returns some response headers before final HTTP message.',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '2xx success',
    codes: [
      {
        code: 200,
        name: 'OK',
        description: 'Standard response for successful HTTP requests.',
        type: 'HTTP',
      },
      {
        code: 201,
        name: 'Created',
        description: 'The request has been fulfilled, resulting in the creation of a new resource.',
        type: 'HTTP',
      },
      {
        code: 202,
        name: 'Accepted',
        description: 'The request has been accepted for processing, but the processing has not been completed.',
        type: 'HTTP',
      },
      {
        code: 203,
        name: 'Non-Authoritative Information',
        description:
          'The request is successful but the content of the original request has been modified by a transforming proxy.',
        type: 'HTTP',
      },
    ],
  },
];
</script>

<style lang="less" scoped>
.code-section {
  &:not(:first-child) {
    margin-top: 20px;
  }

  .code-section-head {
    font-size: 18px;

    .code-section-head-code {
      font-family: monospace;
    }

    .code-section-head-name {
      margin: 0 10px;
    }
  }

  .code-section-description {
    opacity: 0.7;
  }
}
</style>
