//
//  CustomButton.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct CustomButton<DestinationView: View>: View {
    var translationKey: String
    var color: Color
    var isSmall: Bool?
    var onPress: (() -> Void)?
    var pageToNavigate: (DestinationView)?
    @State private var triggerNavigation: Bool = false
    
    init(translationKey: String, color: Color, destination: (DestinationView)? = nil, isSmall: Bool? = nil, onPress: (() -> Void)? = nil) {
        self.translationKey = translationKey
        self.pageToNavigate = destination
        self.color = color
        self.isSmall = isSmall
        self.onPress = onPress
    }
    
    var body: some View {
        Button(action: {
            self.onPress?()
            if self.pageToNavigate != nil {
                triggerNavigation = true
                return
            }
            print("Did not navigate")
        })
        {
            Text(LocalizedStringKey(self.translationKey))
                .foregroundColor(.black)
                .padding([.bottom, .top], isSmall == true ? 10 : 50)
                .padding([.leading, .trailing], isSmall == true ? 40 : 50)
                .background(
                    RoundedRectangle(cornerRadius: isSmall == true ? 15 : 20)
                        .fill(self.color)
                )
        }.navigationDestination(isPresented: $triggerNavigation, destination: {
            self.pageToNavigate
        })
    }
}

#Preview {
    NavigationStack {
        CustomButton<SignInView>(translationKey: "accountAnswerPositive", color: Color("LightBlue"), destination: SignInView())
    }
}

#Preview {
    NavigationStack {
        CustomButton<EmptyView>(translationKey: "signIn", color: Color("SeaBlue"), isSmall: true, onPress: { print("Function Called") })
    }
}
