Разработать функционал на **Laravel** c базой данных **PostgreSQL**.  
Реализовать вывод списка продуктов, просмотр карточки продукта, добавление,  редактирование и удаление продукта.

**Создать таблицу** «products».

<table><tbody><tr><td>ID</td><td>uint, autoincrement</td><td>&nbsp;</td></tr><tr><td>ARTICLE</td><td>varchar(255), unique index</td><td>&nbsp;</td></tr><tr><td>NAME</td><td>varchar(255)</td><td>&nbsp;</td></tr><tr><td>STATUS</td><td>varchar(255)</td><td>"available" | "unavailable"</td></tr><tr><td>DATA</td><td>jsonb</td><td>несколько разных полей&nbsp;<br>(например, Color и Size)&nbsp;<br><i>на своё усмотрение</i></td></tr><tr><td>&nbsp;</td><td>timestamps</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>soft deletes</td><td>&nbsp;</td></tr></tbody></table>

**Создать Eloquent-модель** «Product», связанную с таблицей «products».

В модели реализовать **Local Scope** для получения только доступных продуктов (STATUS = “available”).

**Сделать валидацию** создания и редактирования:

NAME — обязательное поле, длиной не менее 10 символов;

ARTICLE — обязательное поле, только латинские символы и цифры, уникальное в таблице.

**Создать роль администратора**, который может редактировать артикул, остальным пользователям можно редактировать всё, кроме артикула.

Роль пользователя можно узнать из настроек (config(‘products.role’)).

**Реализовать валидацию и проверку прав** (контроллер, модель, отдельный сервис — на своё усмотрение).

Дополнительно:

При создании продукта **реализовать отправку на заданный в конфигурации Email** (config(‘products.email’)) **уведомления** (Notification) о том, что продукт создан.

Уведомление должно отправляться через задачу (Job) в очереди (Queue).

Готовое приложение упаковать в docker.

**Интерфейс приложения реализовать соответственно макету** (см. ссылку): [https://www.figma.com/file/pVspJcvzwZUYynT2dogGG2/PIN-ERP-ТЗ-03.02.2022-(Copy)?type=design&node-id=0-1&mode=design&t=pzPc1ZJlca6HnPL3-0](<https://www.figma.com/file/pVspJcvzwZUYynT2dogGG2/PIN-ERP-%D0%A2%D0%97-03.02.2022-(Copy)?type=design&node-id=0-1&mode=design&t=pzPc1ZJlca6HnPL3-0>)

**Готовое приложение выложить на GitHub / Bitbucket**
