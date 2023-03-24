class UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: SupportData;
}

class UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

class SupportData {
  url: string;
  text: string;
}
