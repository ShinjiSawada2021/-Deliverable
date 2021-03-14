var d=new Date();
d.setDate(1);

for(var i = 0; i < 24; i++){
  document.write("<table>");
  document.write('<td class = "yearMonth">' + d.getFullYear()+"年"+(d.getMonth()+1)+"月" + '</td>');
  document.write('<td class = "firstDay">' + (7-d.getDay()+2)+"日" + '</td>');
  document.write('<td>' + (21-d.getDay()+2)+"日" + '</td>');
  d.setMonth(d.getMonth()+1);        
  document.write("</table>");
}

window.onload = ()　=> {
  var subject;
  var sendmail = document.getElementById('mail_btn');

  sendmail.onclick = function() {
      subject = '【週報】yyyymmdd_第○週_氏名';
      location.href = 'mailto:' + '?subject=' + subject;
  };

};
