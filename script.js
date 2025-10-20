// сразу сохранить элементы
let saves = {
    title: '',
    content: '',
    avtor: 'Автор: Неизвестно'
};

document.getElementById('btn_add').addEventListener('click', function() {
    // создать элемент
    const PostTextTitle = document.createElement('div');
    PostTextTitle.textContent = 'Title:';

    const PostAddingTitle = document.createElement('input');
    PostAddingTitle.className = 'new-item';
    PostAddingTitle.placeholder = 'Введите название для поста...';
    PostAddingTitle.style.padding = '10px';
    PostAddingTitle.style.margin = '10px';
    PostAddingTitle.style.background = '#f0f0f0';
    PostAddingTitle.style.position = 'relative';
    PostAddingTitle.style.width = '500px';
    PostAddingTitle.style.borderRadius = '100px';
    PostAddingTitle.style.border = '1px solid black';
    
    const PostAddingContent = document.createElement('div');
    PostAddingContent.textContent = 'Content:';
    PostAddingContent.style.position = 'relative';
    PostAddingContent.style.top = '10px';

    const PostAddingContentInput = document.createElement('input');
    PostAddingContentInput.className = 'newItem';
    PostAddingContentInput.placeholder = 'Введите текст для поста...';
    PostAddingContentInput.style.padding = '10px';
    PostAddingContentInput.style.margin = '10px';
    PostAddingContentInput.style.background = '#f0f0f0';
    PostAddingContentInput.style.position = 'relative';
    PostAddingContentInput.style.top = '10px';
    PostAddingContentInput.style.width = '500px';
    PostAddingContentInput.style.borderRadius = '100px';
    PostAddingContentInput.style.border = '1px solid black';

    const ButtonEnter = document.createElement('button');
    ButtonEnter.textContent = 'Готово';
    ButtonEnter.style.padding = '10px';
    ButtonEnter.style.borderRadius = '100px';
    ButtonEnter.style.border = '1px solid black';
    ButtonEnter.style.cursor = 'pointer';

    ButtonEnter.onclick = function(){
        if(PostAddingContentInput.value.trim().length > 0 && PostAddingTitle.value.trim().length > 0){
            // сохранить
            saves.title = PostAddingTitle.value;
            saves.content = PostAddingContentInput.value;
            saves.avtor = 'Автор: Неизвестно';

            // удалить
            ButtonEnter.remove();
            PostTextTitle.remove();
            PostAddingTitle.remove();
            PostAddingContent.remove();
            PostAddingContentInput.remove();
            
            createPost();
            
            elButCrte.style.display = 'inline-block';
            return alert('Вы успешно создали пост!');
        }
        else {
            return alert('Заполните поля!');
        }
    };

    const elButCrte = document.getElementById('btn_add');
    elButCrte.style.display = 'none';

    const elTextPost = document.getElementById('jst_text');
    if (elTextPost) {
        elTextPost.style.display = 'none';
    }
    
    // выводить
    document.getElementById('add_container').appendChild(PostTextTitle);
    document.getElementById('add_container').appendChild(PostAddingTitle);
    document.getElementById('add_container').appendChild(PostAddingContent);
    document.getElementById('add_container').appendChild(PostAddingContentInput);
    document.getElementById('add_container').appendChild(ButtonEnter);
});

function createPost() {
    const post = document.createElement('div');
    post.className = 'forum-post';
    post.innerHTML = `
        <h3>${saves.title}</h3>
        <p><strong>${saves.avtor}</strong></p>
        <p>${saves.content}</p>
        <div class="post_meta">
            <span>${new Date().toLocaleString()}</span>
        </div>
    `;
    
    // стиль поста (кстати метод попроще)
    post.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        margin: 15px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;
    
    document.getElementById('add_container').appendChild(post);
}