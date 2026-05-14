
const movies = [
    { id: 1, title: "Побег из Шоушенка", year: 1994, rating: 9.3, genre: "Драма", plot: "Бухгалтер Энди Дюфрейн осуждён за убийство жены и её любовника. В тюрьме он находит дружбу с заключённым Редом и не теряет надежды на свободу.", posterUrl: "https://ir.ozone.ru/s3/multimedia-a/6642802774.jpg" },
    { id: 2, title: "Крёстный отец", year: 1972, rating: 9.2, genre: "Криминал, Драма", plot: "Глава мафиозной семьи дона Корлеоне передаёт власть своему неохотному сыну Майклу.", posterUrl: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
    { id: 3, title: "Тёмный рыцарь", year: 2008, rating: 9.0, genre: "Боевик, Триллер", plot: "Бэтмен противостоит Джокеру, который сеет хаос в Готэме.", posterUrl: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { id: 4, title: "Криминальное чтиво", year: 1994, rating: 8.9, genre: "Криминал, Комедия", plot: "Переплетённые истории гангстеров, боксёра и ограбления.", posterUrl: "https://a.allegroimg.com/original/11cd87/dd8e9ba443c5906a8b22ce272a9d/PULP-FICTION-Plakat-Filmowy-do-Pokoju-A3" },
    { id: 5, title: "Властелин колец: Братство кольца", year: 2001, rating: 8.8, genre: "Фэнтези, Приключения", plot: "Хоббит Фродо отправляется в опасное путешествие, чтобы уничтожить Кольцо Всевластья.", posterUrl: "https://image.tmdb.org/t/p/original/56zTpe2xvaA4alU51sRWPoKPYZy.jpg" },
    { id: 6, title: "Матрица", year: 1999, rating: 8.7, genre: "Фантастика, Боевик", plot: "Хакер Нео узнаёт, что реальность — симуляция, и становится избранным для борьбы с машинами.", posterUrl: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
    { id: 7, title: "Форрест Гамп", year: 1994, rating: 8.8, genre: "Драма, Комедия", plot: "Человек с низким IQ невероятным образом влияет на историю США.", posterUrl: "https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" },
    { id: 8, title: "Начало", year: 2010, rating: 8.8, genre: "Фантастика, Триллер", plot: "Вор внедряется в сны, чтобы украсть или изменить воспоминания.", posterUrl: "https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg" },
    { id: 9, title: "Бойцовский клуб", year: 1999, rating: 8.8, genre: "Триллер, Драма", plot: "Офисный работник и создатель мыла организуют подпольный бойцовский клуб.", posterUrl: "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" },
    { id: 10, title: "Хороший, плохой, злой", year: 1966, rating: 8.8, genre: "Вестерн", plot: "Трое стрелков охотятся за золотом во время Гражданской войны.", posterUrl: "https://image.tmdb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg" },
    { id: 11, title: "Одержимость", year: 2014, rating: 8.5, genre: "Драма, Музыка", plot: "Молодой барабанщик под давлением жестокого наставника достигает предела.", posterUrl: "https://avatars.mds.yandex.net/i?id=11c8a313cba8ba379b07284aaa26068a4e03afbc-4326270-images-thumbs&n=13" },
    { id: 12, title: "Один дома", year: 1990, rating: 7.6, genre: "Комедия, Семейный", plot: "Мальчик случайно остаётся дома один и защищает его от грабителей.", posterUrl: "https://avatars.mds.yandex.net/i?id=a22d6532dc1323bcbb38990f23233c37_l-5616093-images-thumbs&n=13" },
    { id: 13, title: "Титаник", year: 1997, rating: 7.9, genre: "Мелодрама, История", plot: "Любовь пассажиров на фоне гибели легендарного лайнера.", posterUrl: "https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
    { id: 14, title: "Аватар", year: 2009, rating: 7.9, genre: "Фантастика, Приключения", plot: "Морпех на планете Пандора влюбляется в местную культуру.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMjZmZGUyODMtZGY0Zi00Njc5LWE4MzctYTExODI2MTA3MTY2XkEyXkFqcGc@._V1_.jpg" },
    { id: 15, title: "Джокер", year: 2019, rating: 8.4, genre: "Триллер, Драма", plot: "Психологический портрет становления злодея в Готэме.", posterUrl: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
    { id: 16, title: "Паразиты", year: 2019, rating: 8.6, genre: "Триллер, Драма", plot: "Семья бедняков инфильтрируется в дом богатых.", posterUrl: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
    { id: 17, title: "Оппенгеймер", year: 2023, rating: 8.4, genre: "Биография, История", plot: "Создатель атомной бомбы и его моральные терзания.", posterUrl: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
    { id: 18, title: "Барби", year: 2023, rating: 7.0, genre: "Комедия, Фэнтези", plot: "Барби и Кен отправляются в реальный мир.", posterUrl: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
    { id: 19, title: "Дюна", year: 2021, rating: 8.0, genre: "Фантастика, Приключения", plot: "Эпичная борьба за пустынную планету Арракис.", posterUrl: "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
    { id: 20, title: "Человек-паук: Через вселенные", year: 2018, rating: 8.4, genre: "Мультфильм, Фантастика", plot: "Майлз Моралес встречает альтернативные версии Человека-паука.", posterUrl: "https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" }
];


let filteredMovies = [...movies];
let currentSort = null;       
let searchQuery = "";
let yearFrom = 1900;
let yearTo = 2030;
let ratingMin = 0;
let currentPage = 1;
const itemsPerPage = 12;


function filterAndSort() {
    let result = movies.filter(m => {
        const matchTitle = m.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchYear = m.year >= yearFrom && m.year <= yearTo;
        const matchRating = m.rating >= ratingMin;
        return matchTitle && matchYear && matchRating;
    });

    if (currentSort === 'year-asc') {
        result.sort((a, b) => a.year - b.year);
    } else if (currentSort === 'year-desc') {
        result.sort((a, b) => b.year - a.year);
    } else if (currentSort === 'rating-asc') {
        result.sort((a, b) => a.rating - b.rating);
    } else if (currentSort === 'rating-desc') {
        result.sort((a, b) => b.rating - a.rating);
    }

    filteredMovies = result;
    currentPage = 1;
    renderMoviesAndPagination();
}


function renderMoviesAndPagination() {
    const start = (currentPage - 1) * itemsPerPage;
    const pagedMovies = filteredMovies.slice(start, start + itemsPerPage);
    const grid = document.getElementById('moviesGrid');

    if (!grid) return;

    if (pagedMovies.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; background: #0e121f; border-radius: 2rem;">🎞️ Фильмы не найдены. Измените параметры поиска или фильтры.</div>`;
    } else {
        grid.innerHTML = pagedMovies.map(movie => `
            <div class="movie-card" data-id="${movie.id}">
                <div class="poster">
                    <img src="${movie.posterUrl}" alt="${movie.title}" loading="lazy" 
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450?text=🎬+${encodeURIComponent(movie.title).substring(0,20)}'; this.style.objectFit='cover';">
                </div>
                <div class="movie-info">
                    <div class="movie-title">${escapeHtml(movie.title)}</div>
                    <div class="movie-year">${movie.year} • <span class="rating">⭐ ${movie.rating}</span></div>
                    <div class="movie-genre" style="font-size:0.7rem; color:#bbb; margin-top:4px;">${movie.genre}</div>
                </div>
            </div>
        `).join('');
    }

    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const pagDiv = document.getElementById('pagination');
    if (totalPages <= 1) {
        pagDiv.innerHTML = '';
    } else {
        let pagHtml = `<button ${currentPage === 1 ? 'disabled' : ''} id="prevPageBtn">◀ Назад</button>`;
        for (let i = 1; i <= totalPages; i++) {
            pagHtml += `<button class="${i === currentPage ? 'active-page' : ''}" data-page="${i}">${i}</button>`;
        }
        pagHtml += `<button ${currentPage === totalPages ? 'disabled' : ''} id="nextPageBtn">Вперед ▶</button>`;
        pagDiv.innerHTML = pagHtml;

        document.querySelectorAll('[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentPage = parseInt(e.target.getAttribute('data-page'));
                renderMoviesAndPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        const prevBtn = document.getElementById('prevPageBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderMoviesAndPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
        const nextBtn = document.getElementById('nextPageBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderMoviesAndPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
    }

    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = parseInt(card.getAttribute('data-id'));
            const foundMovie = movies.find(m => m.id === id);
            if (foundMovie) openModal(foundMovie);
        });
    });
}


function openModal(movie) {
    const modal = document.getElementById('modal');
    if (!modal) return;
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalYear').innerText = movie.year;
    document.getElementById('modalRating').innerText = movie.rating;
    document.getElementById('modalGenre').innerText = movie.genre;
    document.getElementById('modalPlot').innerText = movie.plot;
    const modalImg = document.getElementById('modalPoster');
    modalImg.src = movie.posterUrl;
    modalImg.onerror = () => {
        modalImg.src = 'https://via.placeholder.com/300x450?text=No+Poster';
        modalImg.style.objectFit = 'contain';
    };
    modalImg.style.display = 'block';
    modal.style.display = 'flex';
}


function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}


function updateSortButtonsActive() {
    const yearBtn = document.getElementById('sortYearBtn');
    const ratingBtn = document.getElementById('sortRatingBtn');
    if (yearBtn && ratingBtn) {
        yearBtn.classList.remove('active');
        ratingBtn.classList.remove('active');
        if (currentSort === 'year-asc' || currentSort === 'year-desc') yearBtn.classList.add('active');
        if (currentSort === 'rating-asc' || currentSort === 'rating-desc') ratingBtn.classList.add('active');
    }
}


function initEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const yearFromInput = document.getElementById('yearFrom');
    const yearToInput = document.getElementById('yearTo');
    const ratingMinInput = document.getElementById('ratingMin');
    const sortYearBtn = document.getElementById('sortYearBtn');
    const sortRatingBtn = document.getElementById('sortRatingBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndSort();
        });
    }
    if (yearFromInput) {
        yearFromInput.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            yearFrom = isNaN(val) ? 1900 : val;
            filterAndSort();
        });
    }
    if (yearToInput) {
        yearToInput.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            yearTo = isNaN(val) ? 2030 : val;
            filterAndSort();
        });
    }
    if (ratingMinInput) {
        ratingMinInput.addEventListener('input', (e) => {
            let val = parseFloat(e.target.value);
            ratingMin = isNaN(val) ? 0 : val;
            filterAndSort();
        });
    }
    if (sortYearBtn) {
        sortYearBtn.addEventListener('click', () => {
            if (currentSort === 'year-asc') currentSort = 'year-desc';
            else currentSort = 'year-asc';
            filterAndSort();
            updateSortButtonsActive();
        });
    }
    if (sortRatingBtn) {
        sortRatingBtn.addEventListener('click', () => {
            if (currentSort === 'rating-asc') currentSort = 'rating-desc';
            else currentSort = 'rating-asc';
            filterAndSort();
            updateSortButtonsActive();
        });
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }
    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
}


function init() {
    initEventListeners();
    filterAndSort();
    updateSortButtonsActive();
}

document.addEventListener('DOMContentLoaded', init);