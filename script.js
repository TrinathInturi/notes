let index = 1;
let colors=['red','yellow','orange']
$(document).ready(function () {
    let container = $('#card-container');
    function addCard(title,description) {
        $(container).append(
            `<div class="card" id="` + index + `">
            <input type="hidden" value="` + index + `" id="note-id" />
            <div class="card-header">
                <div class="card-header-text" contenteditable="true">` + title + `</div>
                <div class="card-tools">
                    <ul class="tools-list">
                        <li id="add-note">
                           <i class="fa fa-plus"></i>
                        </li>
                        <li class="delete-note" id="delete-note-` + index + `">
                            <i class="fa fa-trash"></i>
                        </li>
                        <li class="change-color" id="change-color-` + index + `">
                            <i class="fa fa-paint-brush"></i>
                        </li>
                    </ul>
                </div>
            </div>
        <div class="card-body" contenteditable="true">
            <p>` + description + `</p>
            </div>
    </div>`
        )
        index++;
    }
    $(container).on('click', '.delete-note', function (e) {
        let id = e.currentTarget.id;
        id = id[id.length - 1];
        $('#' + id).remove()
    })
    $(container).on('click', '#add-note', function (e) {
        addCard('','');
    })
    function toggleColorpanel(){
        $('.colors-panel').toggle();
    }
    function setColor(id,num){
        $('#' + id).css('background-color',colors[num-1]);
        toggleColorpanel();
    }
    $(container).on('click','.change-color', function (e) {
        let id = e.currentTarget.id;
        id = id[id.length - 1];
        toggleColorpanel();
        $('.colors-panel').attr("selected-note",id);
        console.log(id);
    })
    $('.colors-panel').on('change',function(e){
        let num=$('.colors-panel option:selected').val();
        setColor($('.colors-panel').attr("selected-note"),num);
    })
});