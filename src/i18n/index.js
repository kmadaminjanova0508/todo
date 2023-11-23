import { createI18n } from 'vue-i18n'
import ru from '@/i18n/locales/ru.json'
import uz from '@/i18n/locales/uz.json'


export default createI18n({
    legacy: true,
    locale: 'ru', // задает язык по умолчанию для сайта
    fallbackLocale: 'uz', // если нет указаного языка в locale то тут указываем язык который будет его заменять
    globalInjection: true,
    messages: {ru,uz}
})