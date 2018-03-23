$(document).ready(function () {
    /*!
     * 表格的操作
     */
    login_verfiy();
    get_users();
    get_comments();
    get_messages();

    $("#user").on("click", ".u-view", function () {
        var tr, id, name, sex, role, date, email, modal;
        tr = $(this).parent().parent().parent();
        id = tr.children(".u-id").text();
        name = tr.children(".u-name").text();
        sex = tr.children(".u-sex").text();
        role = tr.children(".u-role").text();
        date = tr.children(".u-date").text();
        email = tr.children(".u-email").text();
        modal = "<div id='modal-user' class=\"modal fade show\" style=\"display: block;\">\n" +
            "                        <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
            "                            <div class=\"modal-content tx-size-sm\">\n" +
            "                                <div class=\"modal-header pd-x-20\">\n" +
            "                                    <h6 class=\"tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold\">用户信息</h6>\n" +
            "                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
            "                                        <span onclick='modal_close()'><i class='fa fa-close'></i></span>\n" +
            "                                    </button>\n" +
            "                                </div>\n" +
            "                                <div class=\"modal-body pd-20\">\n" +
            "                                    <div class=\"mg-x-50\">" +
            "                                        <p class=\"mg-b-20 mg-sm-b-30\">id: " + id + "</p>\n" +
            "                                        <p class=\"mg-b-20 mg-sm-b-30\">name: " + name + "</p>\n" +
            "                                        <p class=\"mg-b-20 mg-sm-b-30\">sex: " + sex + "</p>\n" +
            "                                        <p class=\"mg-b-20 mg-sm-b-30\">role: " + role + "</p>\n" +
            "                                        <p class=\"mg-b-20 mg-sm-b-30\">date: " + date + "</p>\n" +
            "                                        <p class=\"mg-b-20 mg-sm-b-30\">email: " + email + "</p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>";
        $("#users-table").after(modal);
        $("body").addClass("modal-open");
        $("body").css("padding-right", "16px");
        $("body").append("<div class=\"modal-backdrop fade show\"></div>");
    });

    $("#user").on("click", ".u-edit", function () {
        var tr, id, name, sex, email, modal;
        tr = $(this).parent().parent().parent();
        id = tr.children(".u-id").text();
        name = tr.children(".u-name").text();
        sex = tr.children(".u-sex").text();
        email = tr.children(".u-email").text();
        modal = "<div id='modal-user' class=\"modal fade show\" style=\"display: block;\">\n" +
            "                        <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
            "                            <div class=\"modal-content tx-size-sm\">\n" +
            "                                <div class=\"modal-header pd-x-20\">\n" +
            "                                    <h6 class=\"tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold\">用户信息</h6>\n" +
            "                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
            "                                        <span onclick='modal_close()'><i class='fa fa-close'></i></span>\n" +
            "                                    </button>\n" +
            "                                </div>\n" +
            "                                <div class=\"modal-body\">\n" +
            "                                    <div class=\"card pd-20 pd-sm-40 form-layout form-layout-4\" data->\n" +
            "                                        <div class=\"row\">\n" +
            "                                            <label class=\"col-sm-2 form-control-label\">name: <span class=\"tx-danger\">*</span></label>\n" +
            "                                            <div class=\"col-sm-10 mg-t-10 mg-sm-t-0\">\n" +
            "                                                <input id=\"name\" type=\"text\" class=\"form-control\" value=\"" + name + "\" placeholder=\"Enter name\" required>\n" +
            "                                            </div>\n" +
            "                                        </div><!-- row -->\n" +
            "                                        <div class=\"row mg-t-20\">\n" +
            "                                            <label class=\"col-sm-2 form-control-label\">sex: <span class=\"tx-danger\">*</span></label>\n" +
            "                                            <div class=\"col-sm-10 mg-t-10 mg-sm-t-0\">\n" +
            "                                                <div class=\"btn-group\">\n" +
            "                                                   <label class=\"rdiobox mg-l-10\"><input name=\"sex\" type=\"radio\" value=\"男\" male><span>男</span></label>\n" +
            "                                                   <label class=\"rdiobox mg-l-50\"><input name=\"sex\" type=\"radio\" value=\"女\" female><span>女</span></label>\n" +
            "                                               </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"row mg-t-20\">\n" +
            "                                            <label class=\"col-sm-2 form-control-label\">email: <span class=\"tx-danger\">*</span></label>\n" +
            "                                            <div class=\"col-sm-10 mg-t-10 mg-sm-t-0\">\n" +
            "                                                <input id=\"email\" type=\"email\" class=\"form-control\" value=\"" + email + "\" placeholder=\"Enter email\" required>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"form-layout-footer mg-t-30\">\n" +
            "                                            <button type=\"submit\" class=\"btn btn-info mg-lg-r-9\" onclick='update(" + id + ")'>Submit</button>\n" +
            "                                            <button type=\"reset\" class=\"btn btn-secondary\" onclick='modal_close()'>Cancel</button>\n" +
            "                                        </div><!-- form-layout-footer -->\n" +
            "                                    </div>\n" +
            "                                </div><!-- modal-body -->\n" +
            "                            </div>\n" +
            "                        </div><!-- modal-dialog -->\n" +
            "                    </div>";
        if (sex === "男") {
            modal = modal.replace("male", "checked").replace("female", "");
        } else {
            modal = modal.replace("female", "checked").replace("male", "");
        }
        $("#users-table").after(modal);
        $("body").addClass("modal-open");
        $("body").css("padding-right", "16px");
        $("body").append("<div class=\"modal-backdrop fade show\"></div>");
    });

    $("#user").on("click", ".u-delete", function () {
        var tr, id, result;
        tr = $(this).parent().parent().parent();
        id = tr.children(".u-id").text();
        result = confirm("确定要删除吗？");
        if (result) {
            $.ajax({
                type: "get",
                url: "api/delete_user.php",
                data: {
                    "u_id": id
                },
                dataType: "json",
                success: function (data) {
                    var json = JSON.stringify(data);
                    if (json.status === "success") {
                        tr.remove();
                    } else {
                        console.log(json.status);
                    }
                    tr.remove();
                },
                error: function (xhr) {
                    console.log("error:" + xhr.status + xhr.statusText);
                }
            });
        }
    });
});

function modal_close() {
    $("#modal-user").remove();
    $(".modal-backdrop").remove();
    $("body").removeClass("modal-open");
    $("body").removeAttr("style");
}

function update(id) {
    var name, sex, email;
    name = $("#name").val();
    sex = $("[name=sex]:checked").val();
    email = $("#email").val();
    if (name === '' || email === '') {
        if (name === '') {
            $("#name").css("border-color", "red");
            $("#name").focus();
        } else if (email === '') {
            $("#name").css("border-color", "");
            $("#email").css("border-color", "red");
            $("#email").focus();
        }
    } else {
        $.ajax({
            type: "get",
            url: "api/update_user.php",
            data: {
                "u_id": id,
                "u_name": name,
                "u_sex": sex,
                "u_email": email
            },
            dataType: "json",
            success: function (data) {
                modal_close();
                get_users();
            },
            error: function (xhr) {
                console.log("error:" + xhr.status + xhr.statusText);
            }
        });
    }
}

function get_users() {
    $.ajax({
        type: "get",
        url: "http://localhost/blog/users",
        dataType: "json",
        success: function (data) {
            var count, i;
            count = data.users.length;
            $("#user").text('');
            for (i = 0; i < count; i++) {
                $("#user").append('<tr>\n' +
                    '                                <td class="u-id">' + data.users[i].id + '</td>\n' +
                    '                                <td class="u-name">' + data.users[i].name + '</td>\n' +
                    '                                <td class="u-sex">' + data.users[i].sex + '</td>\n' +
                    '                                <td class="u-role">' + data.users[i].role + '</td>\n' +
                    '                                <td class="u-date">' + data.users[i].date + '</td>\n' +
                    '                                <td class="u-email">' + data.users[i].email + '</td>\n' +
                    '                                <td><div class="btn-group" role="group" aria-label="Basic example">' +
                    '<button type="button" class="btn btn-secondary pd-x-25 u-view"><i class=\'icon ion-clipboard\'></i></button>' +
                    '<button type="button" class="btn btn-secondary pd-x-25 u-edit"><i class=\'icon ion-edit\'></i></button>' +
                    '<button type="button" class="btn btn-secondary pd-x-25 u-delete"><i class=\'icon ion-trash-a\'></i></button>' +
                    '</div></td>\n' +
                    '                            </tr>');
            }
        },
        error: function (xhr) {
            console.log("error:" + xhr.status + xhr.statusText);
        }
    });
}

function get_comments() {
    $.ajax({
        type: "get",
        url: "api/comment.php",
        dataType: "json",
        success: function (data) {
            var count, i;
            count = data.comments.length;
            $("#comment").text('');
            for (i = 0; i < count; i++) {
                $("#comment").append('<tr>\n' +
                    '                                <td class="c-id">' + data.comments[i].id + '</td>\n' +
                    '                                <td class="c-info">' + data.comments[i].info + '</td>\n' +
                    '                                <td class="c-name">' + data.comments[i].name + '</td>\n' +
                    '                                <td class="c-sex">' + data.comments[i].sex + '</td>\n' +
                    '                                <td class="c-role">' + data.comments[i].role + '</td>\n' +
                    '                                <td class="c-date">' + data.comments[i].date + '</td>\n' +
                    '                                <td class="c-email">' + data.comments[i].email + '</td>\n' +
                    '                            </tr>');
            }
        },
        error: function (xhr) {
            console.log("error:" + xhr.msg);
        }
    });
}

function get_messages() {
    $.ajax({
        type: "get",
        url: "api/comment.php",
        data: {
            limit: 5
        },
        dataType: "json",
        success: function (data) {
            var count = data.comments.length;
            load_messages(data, 0, count);
        },
        error: function (xhr) {
            console.log("error:" + xhr.status + xhr.statusText);
        }
    });
}

function get_more_messages() {
    $.ajax({
        type: "get",
        url: "api/comment.php",
        dataType: "json",
        success: function (data) {
            var count = data.comments.length;
            load_messages(data, 0, count);
            $("#load-more-messages").text("It's all!");
        },
        error: function (xhr) {
            console.log("error:" + xhr.status + xhr.statusText);
        }
    });
}

/**
 * 加载消息
 * @param data
 * @param from
 * @param to
 */
function load_messages(data, from, to) {
    $("#messages-item").text('');
    for (i = from; i < to; i++) {
        $("#messages-item").append('<div class="list-group-item list-group-item-action media">\n' +
            '                            <img src="picture/img' + i + '.jpg" alt="">\n' +
            '                            <div class="media-body">\n' +
            '                                <div class="msg-top">\n' +
            '                                    <span>' + data.comments[i].name + '</span>\n' +
            '                                    <span>' + data.comments[i].date + '</span>\n' +
            '                                </div>\n' +
            '                                <p class="msg-summary">' + data.comments[i].info + '</p>\n' +
            '                            </div><!-- media-body -->\n' +
            '                        </div><!-- list-group-item -->');
    }
}

function login_verfiy() {
    $.ajax({
        type: "get",
        url: "api/login_verify.php",
        dataType: "json",
        success: function (data) {
            if (data.code === 0) {
                $("#user-name").text(data.name);
                $("#edit-profile").attr("href","/blog/u/" + data.name);
            } else {
                console.log(data.msg);
                location.href = 'http://localhost/blog/login';
            }
        },
        error: function (xhr) {
            console.log("error:" + xhr.status + xhr.statusText);
        }
    });
}

function sign_out() {
    $.ajax({
        type: "get",
        url: "api/sign_out.php",
        dataType: "json",
        success: function (data) {
            if (data.code === 0) {
                location.herf = 'http://localhost/blog/login';
            } else {
                console.log(data.msg);
            }
        },
        error: function (xhr) {
            console.log("error:" + xhr.status + xhr.statusText);
        }
    });
}