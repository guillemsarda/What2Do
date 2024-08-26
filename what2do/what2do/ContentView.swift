//
//  ContentView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 26/8/24.
//

import SwiftUI

struct WelcomeView: View {
    var body: some View {
        Text(LocalizedStringKey("welcome"))
            .font(.largeTitle)
            .fontWeight(.bold)
        Text(LocalizedStringKey("accountQuestion"))
            .font(.title)
            .fontWeight(.semibold)
        Button(LocalizedStringKey("accountAnswerPositive"), action: {
            print("hello")
        })
        .foregroundColor(.black)
        .padding(30)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(Color("Blue"))
        )
        Button(LocalizedStringKey("accountAnswerNegative"), action: {
            print("hello")
        })
        .foregroundColor(.black)
        .padding(30)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(Color("SeaBlue"))
        )
    }
}

#Preview {
    WelcomeView()
}
