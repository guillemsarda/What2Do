//
//  ContentView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 26/8/24.
//

import SwiftUI

struct WelcomeView: View {
    var body: some View {
        NavigationStack {
            WithHeaderView(translationKey: "welcome") {
                VStack {
                    Text(LocalizedStringKey("accountQuestion"))
                        .font(.title)
                        .fontWeight(.semibold)
                        .padding([.bottom], 30)
                        .multilineTextAlignment(.center)
                    CustomButton(translationKey: "accountAnswerPositive", color: Color("LightBlue"), destination: SignInView())
                        .padding([.bottom], 15)
                    CustomButton(translationKey: "accountAnswerNegative", color: Color("SeaBlue"), destination: SignUpView())
                }
                .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, maxWidth: .infinity, minHeight: 0, maxHeight:.infinity)
            }
        }
    }
}

#Preview {
    WelcomeView()
}
