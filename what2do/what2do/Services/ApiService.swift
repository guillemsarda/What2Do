//
//  ApiService.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 10/9/24.
//

import Foundation

let BASE_URL = ""

class ApiService {
    func signUp(userInfo: FormEntries) async {
        let codable: Codable = ""
        guard let data = try? await HttpClient.post(requestUrl: "\(BASE_URL)/users", requestBody: codable) else { return }
    }
    
    func getPrivateEvents() async -> [Event] {
        guard let events: [Event] = try? await HttpClient.get(requestUrl: "\(BASE_URL)/events/private") else { return [] }
        return events
    }
}
