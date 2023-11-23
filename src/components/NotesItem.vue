<template>
    <div class="notes__item">
        <div class="notes__item-top" :class="{between: !view}">
            <h2>{{ note.title }}</h2>
            <p>{{ note.date }}</p>
        </div>
        <p class="notes__item-text">{{ note.text }}</p>
        <div class="notes__item-btns">
            <button class="notes__item-btns-btn edit" @click="$emit('change', note)">
                <img src="@/assets/images/edit.svg" alt="">
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button class="notes__item-btns-btn del" @click="$emit('delNote', note)">
                <img src="@/assets/images/del.svg" alt="">
                <span>Удалить</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            note: {
                typeof: Object
            },
            view: {
                typeof: Boolean
            }
        }
    }
</script>

