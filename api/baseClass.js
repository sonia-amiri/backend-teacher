class Pagination {
  pageCount ;
  pageNum;
  perPage;
  rowCount
}
class Role {
  static ADMIN = 1;
  static STUDENT = 2;
  static TEACHER = 3;
}

function forName (row, col, cellVal, index) {
  switch (cellVal) {
    case Role.ADMIN: return 'administrator'
    case Role.STUDENT: return 'student'
    case Role.TEACHER: return 'teacher'
  }
}

export {
  Pagination,
  Role,
  forName
}
