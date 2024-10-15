//
//  ApiService.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 10/9/24.
//

import Foundation

let BASE_URL = ProcessInfo.processInfo.environment["API_URL"] ?? ""

class ApiService {
    func signUp(userInfo: FormEntries) async -> Bool {
        guard let data = try? await HttpClient.post(requestUrl: "\(BASE_URL)/users", requestBody: userInfo ) else { return false }
        return true
    }
    
    func getPrivateEvents() async -> [Event] {
        guard let events: [Event] = try? await HttpClient.get(requestUrl: "\(BASE_URL)/events/private") else { return [] }
        return events
    }
}
