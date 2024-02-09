var reverseWords = function(s) {
    s = s.split(' ');
    let reverce = [];
    for(let i=s.length-1;i>=0;i--)
    {
        if(s[i]!='') reverce.push(s[i]);
    }
    return reverce.join(' ');
    
};