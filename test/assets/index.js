const {a, b, ...other} = {a: 1, b: 2, c: 3, d: 4}
common();
'@flag_start(A || B && !C)'
codeInFlagA();
'@flag_end'
commonElse();
