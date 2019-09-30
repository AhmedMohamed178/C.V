function expressionMatter(a, b, c) {
  var result1 = a * (b + c);
  var result2 = a * b * c;
  var result3 = a + b * c;
  var result4 = (a + b) * c;
  var result5 = a + b + c;
  if (result1 > result2) {
    if (result1 > result3){
      if (result1 > result4){
        if (result1 > result5) {
          return result1
        }else {
          return result5
        }
      }else if (result4 > result5){
        return result4
      }else {
        return result5
      }
    }else if (result3 > result4){
      if (result3 > result5){
        return result3
      }else {
        return result5
      }
    }else if (result4 > result5){
      return result4
    }else {
      return result5
    }
  }else if (result2 > result3){
    if (result2 > result4){
      if (result2 > result5) {
        return result2
      }else {
        return result5
      }
    }else if (result4 > result5) {
      return result4
    }else {
      return result5
    }
  }else if (result3 > result4){
    if (result3 > result5) {
      return result3
    }else {
      return result5
    }
  }else if (result4 > result5){
    return result4
  }else {
    return result5
  }
}