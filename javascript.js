function validateAccount(str) {
    regexp=/^[_a-z0-9]{6,}$/;
    if (regexp.test(str)){
        return true;
    }
    return false;
}
    console.log(validateAccount("123abc_"));
    console.log(validateAccount("12345"));

