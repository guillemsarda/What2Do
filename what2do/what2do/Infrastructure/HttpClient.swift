//
//  HttpClient.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 10/9/24.
//

import Foundation

struct HttpClient {
    static func get<ReturnType: Decodable>(requestUrl: String) async throws -> ReturnType {
        guard let url = URL(string: requestUrl) else { throw URLError(.badURL) }
        
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        
        let (data, response) = try await URLSession.shared.data(for: request)
        
        guard let httpResponse = response as? HTTPURLResponse,
              (200...299).contains(httpResponse.statusCode) else {
            throw URLError(.badServerResponse)
        }
                
        let json = try JSONDecoder().decode(ReturnType.self, from: data)

        return json
    }
    
    static func post<T: Codable>(requestUrl: String, requestBody: T) async throws -> Data {
        guard let url = URL(string: requestUrl) else { throw URLError(.badURL) }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        
        let httpBody = try JSONEncoder().encode(requestBody)
        request.httpBody = httpBody
        
        let (data, response) = try await URLSession.shared.data(for: request)
        
        guard let httpResponse = response as? HTTPURLResponse,
              (200...299).contains(httpResponse.statusCode) else {
            throw URLError(.badServerResponse)
        }
        
        return data
    }
}
