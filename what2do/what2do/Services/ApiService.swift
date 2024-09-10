//
//  ApiService.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 10/9/24.
//

import Foundation

let BASE_URL = ""

class ApiService {
    func getPrivateEvents() async -> [Event] {
        guard let events: [Event] = try? await HttpClient.get(requestUrl: "\(BASE_URL)/events/private") else { return [] }
        return events
    }
}
