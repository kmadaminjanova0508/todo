<template>
    <header class="header">
        <nav class="header__nav" v-if="header">
            <button class="header__nav-lang" @click="switchLang">
                {{ this.$i18n.locale }}
            </button>
            <h1 class="header__nav-title">{{ $t('notes') }}</h1>
            <button class="header__nav-search" @click="header = false">
                <img src="@/assets/images/search.svg" alt="">
            </button>
        </nav>
        <nav class="header__search" v-else>
            <button class="header__search-back" @click="header = true, search = ''">
                <img src="@/assets/images/back.svg" alt="">
            </button>
            <input 
                type="text" 
                class="header__search-input" 
                placeholder="Поиск..."
                v-model="search"
            >
            <button class="header__search-clear" @click="search = ''">
                <img src="@/assets/images/close.svg" alt="">
            </button>
        </nav>
    </header>
</template>

<script>

    export default {
        data() {
            return {
                header: true,
                search: '',
            }
        },
        methods: {
            switchLang() {
                this.$i18n.locale == 'ru' ? this.$i18n.locale = 'uz' : this.$i18n.locale = 'ru'
            }
        },
        watch: {
            search(newVal) {
                this.$emit('setSearch', newVal)
            }
        }
    }
</script>
