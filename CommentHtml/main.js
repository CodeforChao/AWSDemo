
$(document).ready(function(){
//     $("#b01").click(function(){
//     // htmlobj=$.ajax({url:"https://dyr760shhd.execute-api.us-east-1.amazonaws.com/dev/UserNoteFunc/111",async:false});
//     // $("#myDiv").html(htmlobj.responseText);

// //     $("#commentList").append(`<li>
// // <h4>义乌小白：</h4>
// // <small>2016-10-02 11:00</small>
// // <p>大神之路，从留言板开始！</p>
// // </li>
// // <li>
// // <h4>义乌小白：</h4>
// // <small>2016-10-02 11:00</small>
// // <p>大神之路，从留言板开始！</p>
// // </li>`);
// //$("#commentList").append("<li><h4>"+a+":</h4><p>大神之路，从留言板开始！</p></li>");

// });
    

$.get('https://dyr760shhd.execute-api.us-east-1.amazonaws.com/dev/UserNoteFunc', function(data) {
   
    $(data).each(function(i,val) {
        $("#commentList").append("<li><h4>"+val.user+":</h4><p>"+val.text+"</p></li>");
    })
    alert($("#commentList li").length);
  });

  $("#user_submit").click(function(){
      var a = $("#user_name");
      var b = $("#user_name").val();
      var c = JSON.stringify({"guid":"147","user":$("#user_name").val(),"text":$("#user_mes").val()});
    alert($("#user_name"));
        $(function(){
            $.ajax({
                url:"https://dyr760shhd.execute-api.us-east-1.amazonaws.com/dev/UserNoteFunc",
                type:"post",
                contentType: "application/json",
                dataType:"text",
                data:JSON.stringify({"id":$("#commentList li").length+1,"user":$("#user_name").val(),"text":$("#user_mes").val()}),
                success:function(data){
                    alert("成功");
                    alert(data);
                },
                error:function(){
                    alert("错误")
                }
            });
    });
    
    })
    





});



