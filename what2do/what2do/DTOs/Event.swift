//
//  Event.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 10/9/24.
//

import Foundation

struct Event: Decodable {
    var type: String
    var event_name: String
    var location: String
    var date: String
    var ticket_link: String
    var num_people: Int
    var event_description: String
    var image_link: String
}
