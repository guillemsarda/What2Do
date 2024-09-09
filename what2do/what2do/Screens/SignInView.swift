//
//  SignInView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct SignInView: View {
    @State private var email: String = ""
    @State private var password: String = ""
    
    var body: some View {
        WithHeaderView(translationKey: "signMeIn", hasArrow: true) {
            VStack {
                Text("email")
                    .frame(width: 250, alignment: .leading)
                TextField("email", text: $email)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                Text("password")
                    .frame(width: 250, alignment: .leading)
                TextField("password", text: $password)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                CustomButton(translationKey: "signIn", color: Color("ElectricBlue"), destination: EmptyView(), isSmall: true)
            }
            .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, maxWidth: 300, minHeight: 0, maxHeight: 250, alignment: .center)
            .background(Color("LightBlue"))
            .cornerRadius(20)
        }.navigationBarBackButtonHidden(true)
    }
}

#Preview {
    SignInView()
}
