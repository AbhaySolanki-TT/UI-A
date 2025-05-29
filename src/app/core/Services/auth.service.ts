import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { API_ENDPOINTS } from "../../shared/api-endpoints";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router,
        private service: ApiService
    ) { }

    login(credentials: { email: string; password: string }) {
        return this.service.post<{ token: string }>(
            API_ENDPOINTS.AUTH.LOGIN, 
            credentials
        );
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login'])
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}