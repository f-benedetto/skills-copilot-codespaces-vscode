function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'path/to/template.html',
    controller: 'MemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}