//
//  CustomButton.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct CustomButton<DestinationView: View>: View {
    var translationKey: String
    var pageToNavigate: (DestinationView)?
    var color: Color
    @State private var triggerNavigation: Bool = false
    
    init(translationKey: String, color: Color, destination: (DestinationView)? = nil) {
        self.translationKey = translationKey
        self.pageToNavigate = destination
        self.color = color
    }
    
    var body: some View {
        NavigationStack {
            Button(action: {
                if self.pageToNavigate != nil {
                    triggerNavigation = true
                    return
                }
                print("Did not navigate")
            })
            {
                Text(LocalizedStringKey(self.translationKey))
                    .foregroundColor(.black)
                    .padding([.bottom, .top], 30)
                    .padding([.leading, .trailing], 50)
                    .background(
                        RoundedRectangle(cornerRadius: 20)
                            .fill(self.color)
                    )
            }.navigationDestination(isPresented: $triggerNavigation, destination: {
                self.pageToNavigate
            })
        }
    }
}

#Preview {
    CustomButton<SignInView>(translationKey: "accountAnswerPositive", color: Color("LightBlue"), destination: SignInView())
}

#Preview {
    CustomButton<EmptyView>(translationKey: "accountAnswerNegative", color: Color("SeaBlue"))
}
