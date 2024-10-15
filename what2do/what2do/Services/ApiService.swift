//
//  ApiService.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 10/9/24.
//

import Foundation

let BASE_URL = ProcessInfo.processInfo.environment["API_URL"] ?? ""

class ApiService {
    func signUp(userInfo: SignUpFormEntries) async -> Bool {
        guard (try? await HttpClient.post(requestUrl: "\(BASE_URL)/users", requestBody: userInfo )) != nil else { return false }
        return true
    }
    
    func signIn(userLoginInfo: SignInFormEntries) async -> Bool {
        guard (try? await HttpClient.post(requestUrl: "\(BASE_URL)/user-login", requestBody: userLoginInfo)) != nil else { return false }
        return true
    }
    
    func getPrivateEvents() async -> [Event] {
        guard let events: [Event] = try? await HttpClient.get(requestUrl: "\(BASE_URL)/events/private") else { return [] }
        return events
    }
}
