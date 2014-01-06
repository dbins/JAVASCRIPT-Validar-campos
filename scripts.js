//funcoes para validacao
function valButton(btn) {
    var cnt = -1;
    for (var i=btn.length-1; i > -1; i--) {
        if (btn[i].checked) {cnt = i; i = -1;}
    }
    if (cnt > -1) return btn[cnt].value;
    else return null;
}

function is_cnpj(str) {
	if (!(str = /^\d?(\d{2})\.?(\d{3})\.?(\d{3})\/?(\d{4})\-?(\d{2})/.exec(str)))
		return false;

	var sum1 = 0, sum2 = 0, sum3 = 0, calc1 = 5, calc2 = 6;

	str.shift();
	str = str.join("");

	for (var i=0; i <= 12; i++) {
		calc1 = (calc1 < 2) ? 9 : calc1;
		calc2 = (calc2 < 2) ? 9 : calc2;

		if (i <= 11)
			sum1 += str[i] * calc1;

		sum2 += str[i] * calc2;
		sum3 += str[i];
		calc1--;
		calc2--;
	}

	sum1 %= 11;
	sum2 %= 11;

	return (sum3 && str[12] == (sum1 < 2 ? 0 : 11 - sum1) && str[13] == (sum2 < 2 ? 0 : 11 - sum2)) ? str : false;
}

function alphanumeric(inputtxt) {    
	var letters = /^[0-9a-zA-Z]+$/;   
	if(inputtxt.value.match(letters)) {   
		return true;   
	} else {   
		return false;   
	}   
}  

function validatePassword (pw) {

	// enforce the no sequential, identical characters rule
	//if (/([\S\s])\1/.test(pw))
		//return false;
		
	if (/([\S\s])\1\1/.test(pw))
	return false;

	// enforce alphanumeric/qwerty sequence ban rules
		var	lower   = "abcdefghijklmnopqrstuvwxyz",
			badSequenceLength  = 0,
			upper   = lower.toUpperCase(),
			numbers = "0123456789",
			qwerty  = "qwertyuiopasdfghjklzxcvbnm",
			start   = badSequenceLength - 1,
			seq     = "_" + pw.slice(0, start);
		for (i = start; i < pw.length; i++) {
			seq = seq.slice(1) + pw.charAt(i);
			if (
				lower.indexOf(seq)   > -1 ||
				upper.indexOf(seq)   > -1 ||
				numbers.indexOf(seq) > -1 ||
				qwerty.indexOf(seq) > -1) {
				return false;
			}
		}

	// great success!
	return true;
}


function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function reflete(obj){
parent.resultado.location.href="cep.asp?cep="+obj;
}

function IsCEP(strCEP)
        {
  
	if (strCEP.length<8)
	return false;
  
	re = /#@?$%~|00000000|11111111|22222222|33333333|44444444|55555555|66666666|77777777|88888888|99999999/gi;
    if(re.test(strCEP)){
	     return false;
   }else{
     return true;
   }
}




function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   //alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   //alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    //alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    //alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    //alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    //alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    //alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
	}

function checkMail(mail){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(mail) == "string"){
        if(er.test(mail)){ return true; }
    }else if(typeof(mail) == "object"){
        if(er.test(mail.value)){ 
                    return true; 
                }
    }else{
        return false;
        }
}

function checaCPF (CPF) {
	if (CPF.length != 11 || CPF == "00000000000" || CPF == "11111111111" ||
		CPF == "22222222222" ||	CPF == "33333333333" || CPF == "44444444444" ||
		CPF == "55555555555" || CPF == "66666666666" || CPF == "77777777777" ||
		CPF == "88888888888" || CPF == "99999999999" || CPF == "01234567890")
		return false;
	soma = 0;
	for (i=0; i < 9; i ++)
		soma += parseInt(CPF.charAt(i)) * (10 - i);
	resto = 11 - (soma % 11);
	if (resto == 10 || resto == 11)
		resto = 0;
	if (resto != parseInt(CPF.charAt(9)))
		return false;
	soma = 0;
	for (i = 0; i < 10; i ++)
		soma += parseInt(CPF.charAt(i)) * (11 - i);
	resto = 11 - (soma % 11);
	if (resto == 10 || resto == 11)
		resto = 0;
	if (resto != parseInt(CPF.charAt(10)))
		return false;
       
	return true;
 }

function isNumberKey(evt)
{
 var charCode = (evt.which) ? evt.which : event.keyCode
 if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;

 return true;
}

function calculaIdade(dataNasc){ 
	var dataAtual = new Date();
	var anoAtual = dataAtual.getFullYear();
	var anoNascParts = dataNasc.split('/');
	var diaNasc =anoNascParts[0];
	var mesNasc =anoNascParts[1];
	var anoNasc =anoNascParts[2];
	var idade = anoAtual - anoNasc;
	var mesAtual = dataAtual.getMonth() + 1; 

//se mês atual for menor que o nascimento, nao fez aniversario ainda; (26/10/2009) 
	if(mesAtual < mesNasc){
		idade--; 
	} else {
		//se estiver no mes do nasc, verificar o dia
		if(mesAtual == mesNasc){ 
			if(dataAtual.getDate() < diaNasc ){ 
				//se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
				idade--; 
			}
		}
	} 
	return idade; 
}


function verifica_data_valida (campo) { 

	dia = parseInt(campo.substring(0,2)); 
	mes = parseInt(campo.substring(3,5)); 
	ano = parseInt(campo.substring(6,10)); 
	
	
	situacao = true; 
	if ((dia < 1)||(dia < 1 || dia > 30) && (  mes == 4 || mes == 6 || mes == 9 || mes == 11 ) || dia > 31) { 
		situacao =  false; 
	} 
	
	if (mes < 1 || mes > 12 ) { 
		situacao = false; 
	} 
	
	if (mes == 2 && ( dia < 1 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4)))) { 
		situacao = false; 
	} 
	
	if (dia == "") { 
		situacao = false; 
	} 
		
	if (mes == "") { 
		situacao = false; 
	} 
	
	if (ano == "") { 
		situacao = false; 
	} 

	return situacao;
}

function checarDatas(data_1, data_2, fator) {
    var Compara01 = parseInt(data_1.split("/")[2].toString() + data_1.split("/")[1].toString() + data_1.split("/")[0].toString());
    var Compara02 = parseInt(data_2.split("/")[2].toString() + data_2.split("/")[1].toString() + data_2.split("/")[0].toString());

	if (fator =='MAIOR'){
		if (Compara01 > Compara02) {
			return false;
		} else {
			return true;
		}
	} else {
		if (Compara01 < Compara02) {
			return false;
		} else {
			return true;
		}
	}
}

//Validacoes - exemplo de implementacao
function checkform_cadastro ( form )
{
var continuar = true;
var mensagem = "Ocorreram os seguintes erros:\n"

		if (form.Nome.value == "") {
		mensagem = mensagem + 'Preencha o nome\n';
		form.Nome.style.backgroundColor='#FFFF99';
		continuar = false;
		}
		
		if (form.CPF.value == "") {
		mensagem = mensagem + 'Preencha o CPF\n';
		form.CPF.style.backgroundColor='#FFFF99';
		continuar = false;
		} else {
			if (checaCPF (form.CPF.value)==false){
			mensagem = mensagem +  'O CPF foi preenchido de forma incorreta\n';
			continuar = false;
			} 		
		}
		
		if (form.Email.value == "") {
			mensagem = mensagem +  'Digite o endereço de e-mail\n';
			form.Email.style.backgroundColor='#FFFF99';
			continuar = false;
		} else {
			if (echeck(form.Email.value)==false){
				mensagem = mensagem + 'Preencha corretamente o endereço de e-mail\n';
				continuar = false;
			}
		}
		
		if (form.Profissao.options[form.Profissao.selectedIndex].text == "SELECIONE") {
		mensagem = mensagem + 'Selecione a sua profissão\n';	
		continuar = false;	
		}
		
		if (form.Data_Nascimento.value == "") {
		mensagem = mensagem + 'Preencha a data de nascimento\n';
		form.Data_Nascimento.style.backgroundColor='#FFFF99';
		continuar = false;
		} else {
			var idade;
			idade = calculaIdade(form.Data_Nascimento.value);
			if (idade < 0) {
				//O ano de aniversario e maior que a data atual
				mensagem = mensagem + 'O ano da data de nascimento é maior que o ano da data atual\n';
				form.Data_Nascimento.style.backgroundColor='#FFFF99';
				continuar = false;
			} else {
				//Se a idade for menor de 18 anos, não permitir cadastrar
				if (idade < 18){
					mensagem = mensagem + 'Somente participantes maiores que 18 anos podem participar\n';
					form.Data_Nascimento.style.backgroundColor='#FFFF99';
					continuar = false;					
				}
			}
		}
		
		
		if (form.CEP.value == "") {
		mensagem = mensagem + 'Preencha o CEP\n';
		form.CEP.style.backgroundColor='#FFFF99';
		continuar = false;
		} else {
			if (IsCEP(form.CEP.value)) {
			// O CEP é válido;
			} else {
				mensagem = mensagem + 'O CEP esta preenchido de forma incorreta\n';
				form.CEP.style.backgroundColor='#FFFF99';
				continuar = false;
			}
		}
		
		
		if (form.endereco.value == "") {
		mensagem = mensagem + 'Preencha o endereço residencial\n';
		form.endereco.style.backgroundColor='#FFFF99';
		continuar = false;
		} else {
			if (validatePassword (form.endereco.value)){
			//O endereço não possui dados sequenciais ou repetidos
			} else {
			mensagem = mensagem + 'O endereço residencial foi preenchido de forma incorreta\n';
			form.endereco.style.backgroundColor='#FFFF99';
			continuar = false;
			}
		}
		
		if (form.senha.value == "") {
			mensagem = mensagem + 'Informe a sua senha\n';
			form.senha.style.backgroundColor='#FFFF99';
			continuar = false;
		} else {
			if (form.senha.value.length < 6){
				mensagem = mensagem + 'A senha deve ter pelo menos 6 caracteres\n';
				form.senha.style.backgroundColor='#FFFF99';
				continuar = false;
			} else {
				if (alphanumeric(form.senha)){
					//Nao faz nada
				} else {
					mensagem = mensagem + 'A senha deve possuir apenas letras ou números!\n';
					form.senha.style.backgroundColor='#FFFF99';
					continuar = false;
				}
			}
		}
		
		
	if (continuar) {
		return true;
	} else {
		alert(mensagem);
		return false;
	}

}


