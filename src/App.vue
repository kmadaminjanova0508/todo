<template>
  <div class="wrapper">
    <Navbar
      @setSearch="searchValue = $event"
    />
    <Notes 
      :notes="filterNotes"
      @delNote="delNote"
      @change="change"
    />
    <Transition name="modal">
      <Modal 
        @close="isModelOpen = false" 
        v-if="isModelOpen"
        @addNote="addNote"
        :edit="edit"
        :editedNote="editedNote"
        @changeNote="changeNote"
      />
    </Transition>
  
    <button class="addNote" @click="isModelOpen = true, edit = false" v-if="!isModelOpen">
      <img src="@/assets/images/edit.svg" alt="">
    </button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Navbar from './components/Navbar.vue';
import Notes from './components/Notes.vue';


  export default {
    components: {
    Navbar,
    Notes,
    Modal
},
    data() {
      return {
        isModelOpen: false,
        notes: [],
        edit: false,
        editedNote: null,
        searchValue: ''
      }
    },
    created() {
      this.getNotes()
    },
    computed: {
        filterNotes() {
          return this.searchValue ? this.notes.filter(note => note.title.toLowerCase().includes(this.searchValue.toLowerCase())) : this.notes
        }
    },
    methods: {
      addNote(note) {
        this.notes.push(note)
      },
      delNote(note) {
       this.notes = this.notes.filter(el => el.id != note.id)
      },
      change(note) {
        this.isModelOpen = this.edit = true
        this.editedNote = note
      },
      changeNote(newNote) {
        this.notes.forEach(note => {
          if(note.id == newNote.id) {
            note.title = newNote.title
            note.text = newNote.text
            note.date = newNote.date
          }
        })
        this.editedNote = null
      },
      getNotes() {
        let localNotes = localStorage.notes
        if(localNotes) {
          this.notes = JSON.parse(localNotes)
        }
      }
    },
    watch: {
      notes: {
        handler() {
          localStorage.notes = JSON.stringify(this.notes)
        },
        deep: true
      }
    }
}
</script>

