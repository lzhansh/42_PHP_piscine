function ft_is_sort(tab) {
  for (var i = 1; i < tab.length; i += 1) {
    if (tab[i-1] > tab[i])
      return (false)
  }
  return (true)
}
