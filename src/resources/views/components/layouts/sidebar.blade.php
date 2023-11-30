<aside class="sidebar">
    <div class="sidebar__header">
        <div class="sidebar__logo">
            <a href="{{ route('home') }}">
                <img src="{{ asset('storage/images/logo.png') }}"
                     alt="Логотип Enterprise Resource Planning"
                     width="53px">
            </a>
        </div>

        <p class="sidebar__text">Enterprise<br> Resource<br> Planning</p>
    </div>

    <nav class="sidebar__menu menu">
        <ul class="menu__list">
            <li class="menu__item">
                <a href="{{ route('products.index') }}">Продукты</a>
            </li>
        </ul>
    </nav>
</aside>
