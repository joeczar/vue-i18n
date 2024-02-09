<template>
  <div class="dashboard">
    <h1>{{ t('dashboard.dashboard.dashboardTitle') }}</h1>
    <p>{{ t('dashboard.welcomeMessage', { username: user.name }) }}</p>

    <div class="statistics">
      <h2>{{ t('dashboard.statistics') }}</h2>
      <p>{{ t('dashboard.totalPosts', { count: statistics.posts }) }}</p>
      <p>{{ t('dashboard.totalComments', { count: statistics.comments }) }}</p>
      <p>{{ t('dashboard.totalLikes', { count: statistics.likes }) }}</p>
    </div>

    <div class="tasks">
      <h2>{{ t('dashboard.tasksTitle') }}</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ t(task.messageKey) }}</li>
      </ul>
    </div>

    <div class="messages">
      <h2>{{ t('dashboard.messagesTitle') }}</h2>
      <p v-for="msg in messages" :key="msg.id">{{ t(msg.contentKey, msg.variables) }}</p>
      <IButton>Save</IButton>
    </div>

    <div class="footer">
      <p>{{ t('dashboard.footerNote') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { IButton } from '@fobizz/ui-lib';
const { t } = useI18n();



const user = ref({ name: 'John Doe' });
const statistics = ref({
  posts: 120,
  comments: 300,
  likes: 1500
});
const tasks = ref([
  { id: 1, messageKey: 'dashboard.tasks.task1' },
  { id: 2, messageKey: 'dashboard.tasks.task2' },
  { id: 3, messageKey: 'dashboard.tasks.task3' },
]);
const messages = ref([
  { id: 1, contentKey: 'dashboard.messages.message1', variables: { name: 'Alice' } },
  { id: 2, contentKey: 'dashboard.messages.message2', variables: { count: 5 } },
]);


</script>

<style>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1,
  h2 {
    color: #333;
  }

  p,
  li {
    color: #666;
  }

  .statistics,
  .tasks,
  .messages,
  .footer {
    margin-top: 20px;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .statistics {
    h2 {
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }

    p {
      font-weight: bold;
      color: #333;
    }
  }

  .tasks ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 5px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .messages p {
    background-color: #e3fcef;
    padding: 10px;
    border-left: 3px solid #2c662d;
    margin-bottom: 10px;
  }

  .footer {
    text-align: center;

    p {
      font-size: 14px;
    }
  }
}
</style>
