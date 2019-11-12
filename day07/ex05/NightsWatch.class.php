<?php
  class NightsWatch {
    private $_rec = [];
    public function recruit($val) {
      $this->_rec[] = $val;
    }
    public function fight() {
      foreach ($this->_rec as $key) {
        if (method_exists($key, 'fight')) {
          $key->fight();
        }
      }
    }
  }
?>
