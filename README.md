# scrollTable

Плагин для реализации горизонтального скролинга таблицы.

Подключаем плагин:
```
<script src="jquery.slimscroll.min.js"></script>
<link href='jquery.scrollTable.css' rel='stylesheet'>
```

Активируем его для блока который надо прокручивать:
```
$('.dataTables_scrollBody').scrollTable();
```

Пример оформления таблицы:
```
<div class="table-responsive">
    <table class="table table-bordered">
        <thead>
        ...
        </thead>
        <tbody>
        ...
        </tbody>
    </table>
</div>
```
