<template>
    <div class="modal" @click="closeModal">
        <div class="modal__block" @click.stop>
            <h2 class="modal__block-title">
                {{ edit ? $t('changeNote') : $t('addNote') }}
            </h2>
            <div class="modal__block-fields">
                <label>
                    <span>Title</span>
                    <input type="text" v-model="title">
                </label>
                <label>
                    <span>Content</span>
                    <textarea v-model="text"></textarea>
                </label>
            </div>
            <div class="modal__block-btns">
                <button @click="closeModal" class="modal__block-button del">Отмена</button>
                <button v-if="!edit" @click="addNote" class="modal__block-button edit">Добавить</button>
                <button v-if="edit"  @click="changeNote"  class="modal__block-button edit">Изменить</button>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

    export default {
        data() {
          return {
            title: '',
            text: ''
          }  
        },
        props: {
          edit: {
            type: Boolean
          },
          editedNote: {
            type: Object
          }
        },
        methods: {
            closeModal() {
                this.$emit('close')
            },
            changeNote() {
                if(this.title.length > 2 && this.text.length > 2) {
                    const newNote = {
                        id: this.editedNote.id,
                        title: this.title,
                        text: this.text,
                        date: new Date().toLocaleDateString()
                    }
                    this.$emit('changeNote', newNote)
                    this.closeModal()
                }
            },
            addNote() {
                if(this.title.length > 2 && this.text.length > 2) {
                    const note = {
                        id: uuidv4(),
                        title: this.title,
                        text: this.text,
                        date: new Date().toLocaleDateString()
                    }
                    this.$emit('addNote', note)
                    this.closeModal()
                }
               
            }
        },
    }
</script>

